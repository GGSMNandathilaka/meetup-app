import Link from "next/link";

function MainNavigation() {
  return (
    <header className="p-3 bg-dark text-white sticky-header">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <Link href="/" className="header-nav-item">
              All Meetups
            </Link>
            <Link href="/new-meetup" className="nav-link px-2 text-secondary">
              Add New Meetup
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
