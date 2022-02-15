"use strict";

function getData() {
  const projectsData = [
    {
      description: "Invento - inventory management mobile app",
      tags: ["software"],
      link: "https://drive.google.com/drive/folders/1jzt3V-25clzJxqFInngAlKl9sOM0YLxy?usp=sharing",
      src: "img/invento_preview.jpg",
      name: "Invento",
    },
    {
      description: "Minesweeper game",
      tags: ["website"],
      link: "https://clemencegoh.github.io/games/minesweeper",
      src: "img/minesweeper_preview.jpg",
      name: "Minesweeper game",
    },
    {
      description: "Flight Insurance Ethereum Dapp",
      tags: ["website", "school"],
      link: "https://github.com/clemencegoh/SUTD_Blockchain_50.037/tree/master/dapp",
      src: "img/simple_dapp.JPG",
      name: "Ethereum Blockchain Dapp",
    },
    {
      description: "Whack-a-mole game for mojo FPGA",
      tags: ["school", "software"],
      link: "https://github.com/clemencegoh/MojoLucidWAM",
      src: "img/coding_no_preview.jpg",
      name: "Lucid Mojo Project",
    },
    {
      description: "Security Capture The Flag",
      tags: ["school", "website"],
      link: "https://github.com/clemencegoh/Security_CTF",
      src: "img/ctf_example.gif",
      name: "Security CTF Project from SUTD",
    },
    {
      description: "Deep Learning Image Captioning",
      tags: ["school", "software"],
      link: "https://github.com/clemencegoh/DL_Image_Captioning",
      src: "img/DL_Caption_Example.gif",
      name: "Image Captioning deep learning project in SUTD",
    },
    {
      description: "2D Action Platformer Game",
      tags: ["school"],
      link: "https://drive.google.com/drive/u/0/folders/1y8E12kAWRMXpOm59eSQAPltR89zmHVU9",
      src: "img/Sample_Gameplay.gif",
      name: "Game Design project from SUTD, featured project",
    },
    {
      description: "Flutter QR Code scanner",
      tags: ["software"],
      link: "https://github.com/clemencegoh/Flutter_Wrapper",
      src: "img/flutter_simple_demo.gif",
      name: "Meant to be a flutter app for experimenting, currently functioning as a QR code scanner",
    },
  ];

  const skillsData = [
    {
      name: "Python",
      from: new Date(2017, 0),
      total: 0,
    },
    {
      name: "Golang",
      from: new Date(2017, 4),
      total: 0,
    },
    {
      name: "Java",
      from: new Date(2017, 8),
      total: 0,
    },
    {
      name: "Blockchain",
      from: new Date(2018, 8),
      total: 0,
    },
    {
      name: "Android",
      from: new Date(2017, 8),
      total: 0,
    },
    {
      name: "Game Design",
      from: new Date(2019, 5),
      total: 0,
    },
    {
      name: "Javascript",
      from: new Date(2018, 4),
      total: 0,
    },
    {
      name: "HTML/CSS",
      from: new Date(2018, 4),
      total: 0,
    },
    {
      name: "Reactjs",
      from: new Date(2018, 4),
      total: 0,
    },
    {
      name: "Cyber Security",
      from: new Date(2019, 1),
      total: 0,
    },
    {
      name: "AI",
      from: new Date(2018, 8),
      total: 0,
    },
  ];

  return [projectsData, skillsData];
}
