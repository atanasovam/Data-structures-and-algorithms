const insertionSort = (seq) => {
    let len = seq.length;

    for (let i = 1; i < len; i++) {
        let currentVal = seq[i];
        let j;

        /* If large, shift the number */
        for (j = i - 1; j >= 0 && (seq[j] > currentVal); j--) {
            seq[j + 1] = seq[j];
        }

        //Insert the copied number at the correct position in sorted part. 
        seq[j + 1] = currentVal;
    }
};

const seq = [93, 0, 4, -1];
insertionSort(seq);

console.log(seq);