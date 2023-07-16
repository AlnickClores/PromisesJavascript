let grade = 94;

const GradeConverter = (grd) => {
    return new Promise((resolve, reject) => {
        if(grd >= 98) {
            resolve({
                remarks: "Passed",
                award: "Highest Honors"
            })
        } else if(grd >= 95) {
            resolve({
                greet: "Congratulations",
                remarks: "Passed",
                award: "High Honors"
            })
        } else if(grd >= 90) {
            resolve({
                remarks: "Passed",
                award: "Honors"
            })
        } else if(grd > 74){
            resolve({
                remarks: "Passed",
                award: ""
            })
        } else {
            reject({
                remarks: "Failed"
            });
        }
    })
}

GradeConverter(grade).then((message) => {
    console.log("Congratulations! you are " + message.remarks + " with " + message.award)
}).catch((err) => {
    console.log("Sorry you " + err.remarks)
})
