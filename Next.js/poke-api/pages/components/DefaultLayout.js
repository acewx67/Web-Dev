import Navbar from "./Navbar"

function DefaultLayout({content}) {
  return (
    <div className="main">
      <Navbar />
      <div className="content">{content}</div>
      {content && (
        <div className="button">
          <div className="viewMore">View More</div>
        </div>
      )}
    </div>
  );
}

export default DefaultLayout
