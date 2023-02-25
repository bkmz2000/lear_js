function getSecondsToday(){
    let now = new Date();
    let yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now-yesterday) / 1000);
}