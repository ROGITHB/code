function incpyra(rows){
    for(let i = 0; i <= rows; ++i){
        let pyramid = "* ".repeat(i)
        console.log(pyramid)
    }
}
incpyra(5)