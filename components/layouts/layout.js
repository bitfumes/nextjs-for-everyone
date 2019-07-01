import Link from 'next/link'
const Layout = ({children}) => (
    <div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/user?name=mango" as="/user/mango"><a>User</a></Link>
        <Link href="/about"><a>About</a></Link>
        {children}
    </div>
)

export default Layout