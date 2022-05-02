import api from './api';

api.get('/users')
        .then(response => {
            console.log(response.data);
            response.data.forEach(user => {
                members.push( {name: user.login, photo: user.avatar_url, emojiUnicode: user.html_url, description: user.html_url, groups: ["Programação", "Design"]} );
            });
        })
        .catch(error => {
            console.log(error);
        });

var members = [
    {
      name: "Rian Ernesto",
      photo: "src/Images/BackgroundImage.png",
      emojiUnicode: "1F602",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum.",
      groups: ["Programação", "Eletrônica", 'Robótica'],
    },
    {
      name: "Matheus Dourado",
      photo: "src/Images/BackgroundImage.png",
      emojiUnicode: "1F620",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nunc.",
      groups: ["Eletrônica", "Robótica"]
    },
    {
      name: "Marco Antônio",
      photo: "src/Images/BackgroundImage.png",
      emojiUnicode: "1F605",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta ex.",
      groups: ["Programação", "Eletrônica", "Robótica"],
    },
    {
      name: "Gabriel Marcelino",
      photo: "src/Images/BackgroundImage.png",
      emojiUnicode: "1F61E",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis.",
      groups: ["Eletrônica"],
    },
    {
      name: "Arthur Bessa",
      photo: "src/Images/BackgroundImage.png",
      emojiUnicode: "1F638",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor tortor, malesuada.",
      groups: ["Programação", "Robótica"],
    },
    {
      name: "Renan Andrew",
      photo: "src/Images/BackgroundImage.png",
      emojiUnicode: "1F63C",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer.",
      groups: ["Programação"],
    },
  ];

export default members;