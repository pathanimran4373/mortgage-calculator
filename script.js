document
  .getElementById("mortgage-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let principal = parseFloat(document.getElementById("mortage_amount").value);
    let interestRate =
      parseFloat(document.getElementById("interest_rate").value) / 100;
    let years = parseInt(document.getElementById("mortgage_term").value);
    let mortgageType = document.querySelector(
      'input[name="custom-radio"]:checked'
    ).value;

    if (isNaN(principal) || isNaN(interestRate) || isNaN(years)) {
      alert("Please fill out all fields correctly.");
      return;
    }

    let monthlyPayment, totalRepayment;

    if (mortgageType === "repayment") {
      let totalAmount = principal + principal * interestRate * years;
      monthlyPayment = totalAmount / (years * 12);
      totalRepayment = totalAmount;
    } else {
      monthlyPayment = principal * (interestRate / 12);
      totalRepayment = monthlyPayment * (years * 12);
    }

    document.getElementById("initial-img").style.display = "none";
    document.getElementById("initial-header").style.display = "none";
    document.getElementById("results-text").innerHTML = `
    <main class="result-container">
    <h1>Your results</h1>
    <p>Your result are shown below based on the information you provided. To adjust the results,edit the form and click "calculate repayments" again.</p>
    <div class="show-result-box">
        <p>Your monthly repayment</p>
          <h1>₹${monthlyPayment.toFixed(2)}</h1>
             <hr>
       <p>Total you'll repay over the term</p>
        <h2>₹${totalRepayment.toFixed(2)}</h2>
    </div>
  </main>
    `;
    document.getElementById("results-text").style.display = "block";
    document.getElementById("initial-text").style.display = "none";
  });

document
  .getElementById("clear-all-fields")
  .addEventListener("click", function () {
    document.getElementById("mortgage-form").reset();
    document.getElementById("results-text").style.display = "none";
    document.getElementById("initial-img").style.display = "block";
    document.getElementById("initial-header").style.display = "block";
    document.getElementById("initial-text").style.display = "block";
  });
