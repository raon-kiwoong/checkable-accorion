module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "remove", "style", "fix", "chore", "document"],
    ],
    "raondata-rule": [2, "always"],
  },
  plugins: [
    {
      rules: {
        /**
         * 커밋할 때 지켜야할 룰.
         * 이슈 넘버 태그는 subject의 가장 마지막에 붙인다.
         * 깃 액션 (close, fix 등)은 이슈를 태그 할 때 첫 이슈넘버 앞에 딱 하나만 쓴다.
         * 이슈 넘버가 여러개일 때에는 콤마로 구분하고, 콤마 뒤에는 공백을 하나 넣는다.
         *
         * @param {*} data
         * @returns
         */

        "raondata-rule": (data) => {
          if (data.references && data.references.length > 0) {
            const refs = data.references;
            let issue_tags = "";
            refs.map((ref, i) => {
              const issue_tag = `${
                ref.action && i === 0 ? `${ref.action} ` : ""
              }${ref.prefix}${ref.issue}`;
              issue_tags += (i === 0 ? "" : ", ") + issue_tag;
            });
            return [
              data.subject.endsWith(issue_tags),
              "When you tagging issue number with actions or only tagging issue number,\n1) It must be at the end of 'subject'.\n2) And separated by ','\n3) And there should be a space after the comma.\nYou Should be written as follows. \n(example) - feat: your commit message close #3, #4",
            ];
          }

          return [true];

          // console.log("--> subject: ", data);
        },
      },
    },
  ],
};
