function OtherList({ items }) {
  return (
    <>
      <h3>List of good stuff:</h3>
      {items.length > 0 ? (
        items.map((item, index) => <p key={index}>{item}</p>)) : (
        <p>Don't have items</p>
      )}
    </>
  );
};

export default OtherList;
