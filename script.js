function submitQuiz() {
  let bayes = 0;
  let freq = 0;

  const answers = document.querySelectorAll('input[type="radio"]:checked');

  const TOTAL_QUESTIONS = 15; // change later when you add more

  if (answers.length < TOTAL_QUESTIONS) {
    alert("Please answer all questions.");
    return;
  }

  answers.forEach(answer => {
    if (answer.value === "bayes") {
      bayes++;
    } else {
      freq++;
    }
  });

  const total = bayes + freq;
  const bayesPercent = Math.round((bayes / total) * 100);
  const freqPercent = 100 - bayesPercent;

  // STEP 1: write base result
  let resultText =
    `Your statistical intuition is ${bayesPercent}% Bayesian and ${freqPercent}% Frequentist.\n\n`;

  // STEP 2: interpretation logic
  if (bayesPercent >= 70) {
    resultText +=
      "Yes!! You tend to update beliefs quickly and are comfortable reasoning under uncertainty.";
  } else if (bayesPercent >= 40) {
    resultText +=
      "Hmmmm...You balance intuition with caution and switch approaches depending on context!";
  } else {
    resultText +=
      "That's right! You prefer stable conclusions and rely on long-run evidence before changing beliefs.";
  }

  // STEP 3: write everything once
  document.getElementById("result").innerText = resultText;
}
