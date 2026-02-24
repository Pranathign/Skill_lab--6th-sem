// Reusable BookCard Component
function BookCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        marginBottom: "16px",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        width: "320px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        color: "#000000", // ✅ TEXT COLOR FIX
      }}
    >
      <h3 style={{ margin: 0, color: "#000000" }}>
        Title: {props.title}
      </h3>
      <p style={{ marginTop: 8, color: "#333333" }}>
        Author: {props.author}
      </p>
    </div>
  );
}

// Parent Component
export default function Page() {
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#eaeaea", // ✅ darker background
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "30px", color: "#000000" }}>
        Book List
      </h1>

      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
}