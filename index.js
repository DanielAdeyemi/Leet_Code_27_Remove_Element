const removeElement = function (nums, val) {
	let procedures = 0; // index at which we going to place element of array we don't need to remove
	for (let i = 0; i < nums.length; i++) {
		//going through array of nums
		if (nums[i] !== val) {
			// if element's value !== value we don't need to remove
			nums[procedures] = nums[i]; // plaace it on a spot of index (or number of procedures we did)
			procedures++; // increase index

			// we can do it in one line by combinig as follows:
			// nums[procedures++] = nums[i] - this will add at the index and increment it for us
		}
	}
	return procedures;
};
