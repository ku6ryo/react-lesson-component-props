# Overview  / 概要
You learn how to create a component and use it. Component is the unit for reusing a functionality. For instance, if you want to display name and age of people and write HTML for each person, that's very inefficient, so we create a component not to write the same operation multiple times.


src/App.js has an example to display name and age of Bob and Michael with Person component. Person component consists of Person.js and Person.css.


コンポーネントを作成、使用する方法を学びます。コンポーネントとは使いまわしができる機能の単位です。例えば複数人の人の名前と年齢を表示するときに一人ひとりにあわせて HTML を書いていると効率が悪いので、コンポーネントを作って同じ処理を繰り返し書かなくていいようにすることができるようになります。

src/App.js に、Person というコンポーネントを使って Bob と Michael の名前を表示している例があります。Person コンポーネントは Person.js と Person.css で構成されています

# How to start React app. / React アプリの動かし方
Run following commands. You'll see content if you access localhost:3000 with your browser.
以下のコマンドを実行してください。ブラウザで localhost:3000 にアクセスするとコンテンツがみれます。
```
npm install
npm start
```

# 問題
## 1
Display a new person Annna. Her age is 22.


Anna という新しい人の情報を表示してみてください。Anna の年齢は 22 歳とします。

## 2
Display height of Bob, Michael and Anna. Set their height however you like.


Bob, Michael, Anna の身長を表示するように変更してみてください。身長はご自身で自由に設定してみてください。
