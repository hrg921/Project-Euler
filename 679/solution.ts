(() => {
  const n = 3;
  const p = 4;

  const combination1 = "3422";
  const combination2 = "3142";
  const combination3 = "1421";
  const combination4 = "4223";

  const combinations = new Array(n).map((_) => 1);
  let count = 0;
  let left = n - 1;
  let right = n;

  while (combinations.filter((i) => i !== 4).length < 1) {
    if (combinations[right] < 4) {
      combinations[right] += 1;
    } else {
      combinations[right] = 1;
      if (combinations[left] < 4) {
        combinations[left] += 1;
      } else {
          combinations[left] = 1;
          if (combinations[left - 1] < 4) {
            combinations[left - 1] += 1;
          }
      }
    }
    console.log(combinations.toString());
    console.log(count);
    count++;
  }
})();

1 1 1

generate (int pos, int element[T], int current[N])
    if pos == N
        print (current)
        return

    for i : 0..T
        current[pos] = element[i]
        generate(pos+1, element, current)

end

function generate (pos: number, element: number[])
