export const forecast = (data) => {
  let len = data.length;

  let day1 = data.slice(0, 8);
  let day2 = data.slice(8, 16);
  let day3 = data.slice(16, 24);
  let day4 = data.slice(24, 32);
  let day5 = data.slice(32, 40);

  // console.log(day1, day1.length);
  // console.log(day2, day2.length);
  // console.log(day3, day3.length);
  // console.log(day4, day4.length);
  // console.log(day5, day5.length);

  let day1_min_max = minMaxFinder(day1);
  let day2_min_max = minMaxFinder(day2);
  let day3_min_max = minMaxFinder(day3);
  let day4_min_max = minMaxFinder(day4);
  let day5_min_max = minMaxFinder(day5);

  let min_Collection = [
    day1_min_max[0],
    day2_min_max[0],
    day3_min_max[0],
    day4_min_max[0],
    day5_min_max[0],
  ];
  let max_Collection = [
    day1_min_max[1],
    day2_min_max[1],
    day3_min_max[1],
    day4_min_max[1],
    day5_min_max[1],
  ];
  // console.log(day1_min_max, "min and max temp of day1");
  // console.log(min_Collection, "all minimums");
  // console.log(max_Collection, "all maximums");
  return [min_Collection, max_Collection];
};

function minMaxFinder(arr) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    min = Math.min(arr[i].main.temp, min);
    max = Math.max(arr[i].main.temp, max);
  }

  return [min, max];
}
