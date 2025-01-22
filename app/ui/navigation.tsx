import MenuMobile from "./navigation-menus/menu-mobile"
import MenuDesktop from "./navigation-menus/menu-desktop"

export default function Navigation() {
    return (
        <>
            <div className="sm:hidden">
                <MenuMobile />
            </div>
            <div className="hidden sm:flex">
                <MenuDesktop />
            </div>
        </>
    )
}
