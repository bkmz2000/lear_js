let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.ceil(styles.length/2)] = "Классика";
alert(styles.shift())
styles.unshift("Рэп", "Регги");