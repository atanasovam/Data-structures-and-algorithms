const selectionSort = (seq) => {
    let primaryEl;

    for (let i = 0; i < seq.length - 1; i++) {
        primaryEl = seq[i];
        let lowestIndex = i;

        for (let j = i + 1; j < seq.length; j++) {
            if (lowestIndex > seq[j]) {
                lowestIndex = j;
            }
        }

        [seq[lowestIndex], seq[i]] = [primaryEl, seq[lowestIndex]];
    }
};

const seq = [93, 0, 4, -1];
selectionSort(seq);

console.log(seq);