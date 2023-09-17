export function generateUniqueId() {
  return (
    new Date().getTime().toString() +
    (Math.random() * 10000000000000000).toString()
  );
}
