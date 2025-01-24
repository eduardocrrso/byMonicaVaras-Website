import MenuMobile from "./navigation-menus/menu-mobile"
import MenuDesktop from "./navigation-menus/menu-desktop"

export default function Navigation() {
    return (
        <>
            <div className="sm:hidden z-20">
                <MenuMobile />
            </div>
            <div className="hidden sm:flex z-20">
                <MenuDesktop />
            </div>
        </>
    )
}
