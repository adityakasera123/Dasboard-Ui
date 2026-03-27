const ctx = document.getElementById("Canvas").getContext("2d");
const btn=document.querySelector("#buttonAdd");

const myChart=new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{
      label: "Users",
      data: [12, 19, 8, 15, 10],
      borderRadius: 8,
      
      backgroundColor: [
  "#4CAF50",
  "#2196F3",
  "#FF9800",
  "#9C27B0",
  "#F44336"
]
    }]
  }
});

const pie = document.getElementById("PieChart").getContext("2d");

const PieChart=new Chart(pie, {
  type: "pie",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [{
      data: [10, 20, 30, 40],
      backgroundColor: [
        "#F44336",
        "#2196F3",
        "#FFEB3B",
        "#4CAF50"
      ]
    }]
  }
});


btn.addEventListener("click", function() {

  myChart.data.datasets[0].data = [
    Math.floor(Math.random()*50),
    Math.floor(Math.random()*50),
    Math.floor(Math.random()*50),
    Math.floor(Math.random()*50),
    Math.floor(Math.random()*50)
  ];

  myChart.update();
});
btn.addEventListener("click", function() {

  PieChart.data.datasets[0].data = [
    Math.floor(Math.random()*50),
    Math.floor(Math.random()*50),
    Math.floor(Math.random()*50),
    Math.floor(Math.random()*50),
    Math.floor(Math.random()*50)
  ];

PieChart.update();
});