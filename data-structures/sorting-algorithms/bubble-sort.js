const bubbleSort = (seq) => {
    let isSorted = false;
    let len = seq.length;

    while (!isSorted) {
        isSorted = true;

        for (let i = 0; i < len - 1; i++) {
            if (seq[i] > seq[i + 1]) {
                [seq[i], seq[i + 1]] = [seq[i + 1], seq[i]];

                isSorted = false;
            }
        }

        len--;
    }
};

const seq = [93, 2, 4, -1];
bubbleSort(seq);

console.log(seq)