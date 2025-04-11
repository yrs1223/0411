let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#ffcad4'); // 背景顏色

  // 生成 40 個圓的初始屬性
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(30, 100),
      color: color(random(255), random(255), random(255)) // 隨機鮮豔顏色
    });
  }
}

function draw() {
  background('#ffcad4'); // 每次重繪背景

  // 計算滑鼠影響的大小變化
  let sizeOffset = map(mouseX, 0, width, 10, 120);

  // 繪製所有圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size + sizeOffset); // 圓大小隨滑鼠變化
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 畫布隨視窗大小調整
}
