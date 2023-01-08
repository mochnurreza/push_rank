function angryProfessor(k, a) {
    const onTime = a.filter(time => time <= 0).length;
    return onTime < k ? 'YES' : 'NO';
}