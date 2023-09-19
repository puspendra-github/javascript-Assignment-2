function wordCounter(sentence) {
    const wordFrequencyMap = new Map();

    const words = sentence.split(/\s+/); 

    for (const word of words) {
        const cleanWord = word.toLowerCase().replace(',', ''); 

        if (cleanWord.length > 0) {
            wordFrequencyMap.set(cleanWord, (wordFrequencyMap.get(cleanWord) || 0) + 1);
        }
    }

    return wordFrequencyMap;
}

const sentence = "please please submit your assignment on time, your assignments are important ";
const result = wordCounter(sentence);

console.log(result);

// Output
// Map(9) {
// 'please' => 2,
//   'submit' => 1,
//   'your' => 2,
//   'assignment' => 1,
//   'on' => 1,
//   'time' => 1,
//   'assignments' => 1,
//   'are' => 1,
//   'important' => 1
// }