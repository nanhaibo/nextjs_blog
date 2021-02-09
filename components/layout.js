export default function Layout ({children}) {
    return (
        <div>
            <img src="/images/profile.jpg" alt="my"/>
            {children}
        </div>
    )
}