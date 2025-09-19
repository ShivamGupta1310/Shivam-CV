export const perBackgroundColor = (number) => {
  if (number >= 80) {
    return "bg-success";
  } else if (number >= 30 && number <= 50) {
    return "bg-warning";
  } else {
    return "bg-danger";
  }
};