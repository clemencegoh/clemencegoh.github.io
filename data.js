"use strict";

function getData() {
  const projectsData = [
    {
      Description: "Invento - inventory management mobile app",
      Category: "software",
      Link: "https://drive.google.com/drive/folders/1jzt3V-25clzJxqFInngAlKl9sOM0YLxy?usp=sharing",
      Preview: "img/invento_preview.jpg",
      PrivateName: "Invento",
    },
    {
      Description: "Minesweeper game",
      Category: "website",
      Link: "https://clemencegoh.github.io/games/minesweeper",
      Preview: "img/minesweeper_preview.jpg",
      PrivateName: "Minesweeper game",
    },
    {
      Description: "Flight Insurance Ethereum Dapp",
      Category: "website school",
      Link: "https://github.com/clemencegoh/SUTD_Blockchain_50.037/tree/master/dapp",
      Preview: "img/simple_dapp.JPG",
      PrivateName: "Ethereum Blockchain Dapp",
    },
    {
      Description: "Whack-a-mole game for mojo FPGA",
      Category: "school software",
      Link: "https://github.com/clemencegoh/MojoLucidWAM",
      Preview: "img/coding_no_preview.jpg",
      PrivateName: "Lucid Mojo Project",
    },
    {
      Description: "Security Capture The Flag",
      Category: "school website",
      Link: "https://github.com/clemencegoh/Security_CTF",
      Preview: "img/ctf_example.gif",
      PrivateName: "Security CTF Project from SUTD",
    },
    {
      Description: "Deep Learning Image Captioning",
      Category: "school software",
      Link: "https://github.com/clemencegoh/DL_Image_Captioning",
      Preview: "img/DL_Caption_Example.gif",
      PrivateName: "Image Captioning deep learning project in SUTD",
    },
    {
      Description: "2D Action Platformer Game",
      Category: "school",
      Link: "https://drive.google.com/drive/u/0/folders/1y8E12kAWRMXpOm59eSQAPltR89zmHVU9",
      Preview: "img/Sample_Gameplay.gif",
      PrivateName: "Game Design project from SUTD, featured project",
    },
    {
      Description: "Flutter QR Code scanner",
      Category: "software",
      Link: "https://github.com/clemencegoh/Flutter_Wrapper",
      Preview: "img/flutter_simple_demo.gif",
      PrivateName:
        "Meant to be a flutter app for experimenting, currently functioning as a QR code scanner",
    },
  ];

  const skillsData = [
    {
      Name: "Python",
      Time_Start: new Date(2017, 0),
      Projects: 7,
      Proficiency: "Intermediate",
    },
    {
      Name: "Golang",
      Time_Start: new Date(2017, 4),
      Projects: 3,
      Proficiency: "Basic",
    },
    {
      Name: "Java",
      Time_Start: new Date(2017, 8),
      Projects: 2,
      Proficiency: "Basic",
    },
    {
      Name: "Blockchain",
      Time_Start: new Date(2018, 8),
      Projects: 1,
      Proficiency: "Basic",
    },
    {
      Name: "Android",
      Time_Start: new Date(2017, 8),
      Projects: 1,
      Proficiency: "Basic",
    },
    {
      Name: "Game Design",
      Time_Start: new Date(2019, 5),
      Projects: 1,
      Proficiency: "Basic",
    },
    {
      Name: "Javascript",
      Time_Start: new Date(2018, 4),
      Projects: 4,
      Proficiency: "Novice",
    },
    {
      Name: "HTML/CSS",
      Time_Start: new Date(2018, 4),
      Projects: 3,
      Proficiency: "Novice",
    },
    {
      Name: "Reactjs",
      Time_Start: new Date(2018, 4),
      Projects: 1,
      Proficiency: "Basic",
    },
    {
      Name: "Cyber Security",
      Time_Start: new Date(2019, 1),
      Projects: 1,
      Proficiency: "Basic",
    },
    {
      Name: "AI",
      Time_Start: new Date(2018, 8),
      Projects: 2,
      Proficiency: "Basic",
    },
  ];

  return [projectsData, skillsData];
}
