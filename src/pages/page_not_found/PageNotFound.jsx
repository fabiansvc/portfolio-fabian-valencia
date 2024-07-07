import "./styles-page-not-found.css";

/**
 * PageNotFound component
 * 
 * This component displays a "Page Not Found" message, typically used for 404 errors.
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function PageNotFound() {
  return (
    <div className="container-not-found">
      <h1 className="error-404">Error 404</h1>
      <h2 className="message-not-found">Page not found</h2>
    </div>
  );
}
