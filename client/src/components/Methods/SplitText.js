export default function SplitText(text){
    let result = [];
    const words = text.split(" ")
    let currWord = ''
    for (let i = 0; i < words.length; i += 1) {
        if (currWord.length + words[i].length < 750){
            currWord += (words[i] + " ")
        }else{
            result.push(currWord)
            currWord = words[i]
        }
        
    }
    if (currWord){
        result.push(currWord)
    }
    console.log(result)
    return result
}
