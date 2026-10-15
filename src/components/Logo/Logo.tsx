// Fast Refresh's "only export components" check doesn't understand the
// compound-component pattern below (Logo.Webstep/Logo.Naf are components
// attached as static properties of Logo), which is intentional here.
/* oxlint-disable react/only-export-components */
import "@/components/Logo/Logo.css";
import { useEffect, useState } from "react";

export type Brand = "abebediye" | "naf" | "webstep";
export type Type = "full" | "lockup" | "symbol" | "wordmark";
export type Variant = "light" | "primary" | "secondary" | "tertiary";

// Picks up any assets/{brand}/{type}/{variant}.svg file automatically -
// drop new brand folders in without touching this file. Lazy (no
// `eager: true`) so each brand's assets ship as their own chunk, fetched
// only when that brand's Logo is actually rendered.
const logoAssets = import.meta.glob<string>("./assets/*/*/*.svg", {
    import: "default",
});

function getLogoLoader(
    brand: Brand,
    type: Type,
    variant: Variant,
): () => Promise<string> {
    const path = `./assets/${brand}/${type}/${variant}.svg`;
    const loader = logoAssets[path];
    if (!loader) {
        throw new Error(`Logo asset not found: ${path}`);
    }
    return loader;
}

export interface LogoProps {
    /** Which brand's logo to render */
    brand: Brand;
    /** Full wordmark ("full") or just the mark ("symbol") */
    type?: Type;
    /** Color variant, matching the source brand assets */
    variant?: Variant;
    width?: number | string;
    height?: number | string;
    /** Inset between the container edge and the logo mark */
    padding?: number | string;
    className?: string;
}

function LogoBase({
    brand,
    type = "symbol",
    variant = "primary",
    width,
    height,
    padding = 8,
    className,
}: LogoProps) {
    const [src, setSrc] = useState<string>();

    useEffect(() => {
        let cancelled = false;
        getLogoLoader(brand, type, variant)().then((resolved) => {
            if (!cancelled) {
                setSrc(resolved);
            }
        });
        return () => {
            cancelled = true;
        };
    }, [brand, type, variant]);

    return (
        <span className="logo-container" style={{ width, height, padding }}>
            {src && (
                <img src={src} alt={`${brand} ${type}`} className={className} />
            )}
        </span>
    );
}

export type BrandLogoProps = Omit<LogoProps, "brand">;

function createBrandLogo(brand: Brand) {
    const BrandLogo = (props: BrandLogoProps) => (
        <LogoBase brand={brand} {...props} />
    );
    BrandLogo.displayName = `Logo.${brand}`;
    return BrandLogo;
}

// Terse, type-safe call sites (<Logo.Webstep variant="secondary" />) that
// all funnel through the same LogoBase rendering/asset-lookup logic.
export const Logo = Object.assign(LogoBase, {
    Abebediye: createBrandLogo("abebediye"),
    Naf: createBrandLogo("naf"),
    Webstep: createBrandLogo("webstep"),
});
