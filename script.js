var isDate = function (input) {
  //   write your code here
	const parsedDate = new Date(input);
  return !isNaN(parsedDate.getTime());
};

// Do not change the code below.
const input = promp("Enter Date.");
alert(isDate(input));
