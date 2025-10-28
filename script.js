const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionContainer = document.getElementById('questionContainer');
const resultContainer = document.getElementById('resultContainer');

// No বাটন এর লজিক: মাউস আনলেই দূরে সরে যাবে
noBtn.addEventListener('mouseover', () => {
    // কন্টেইনার এর মধ্যে র্যান্ডম নতুন X এবং Y পজিশন তৈরি করা হচ্ছে
    const newX = Math.floor(Math.random() * (questionContainer.offsetWidth - noBtn.offsetWidth));
    const newY = Math.floor(Math.random() * (questionContainer.offsetHeight - noBtn.offsetHeight));
    
    // নতুন পজিশন সেট করা
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// Yes বাটন এর লজিক: ক্লিক করলে ফলাফল দেখাবে
yesBtn.addEventListener('click', () => {
    // প্রশ্ন লুকানো
    questionContainer.classList.add('hidden'); 
    
    // ফলাফল দেখানো
    resultContainer.classList.remove('hidden'); 

    // (আপনি যদি GIF প্লে করতে চান, তবে এখানে কোড যুক্ত করতে পারেন)
    // gifResult.play();
});

