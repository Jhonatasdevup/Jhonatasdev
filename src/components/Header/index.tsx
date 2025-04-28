"use client";

import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SchoolIcon from "@mui/icons-material/School";
import MailIcon from "@mui/icons-material/Mail";
import styles from "./styles.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  return (
    <header className={styles.header}>
      <section className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navDesktop}>
            <ul className={styles.ul}>
              <li>
                <a href="#about">
                  <PersonIcon sx={{ fontSize: 18 }} /> Sobre mim
                </a>
              </li>
              <li>
                <a href="#skills">
                  <BuildIcon sx={{ fontSize: 18 }} /> Skills
                </a>
              </li>
              <li>
                <a href="#projetos">
                  <FolderOpenIcon sx={{ fontSize: 18 }} /> Projetos
                </a>
              </li>
              <li>
                <a href="#educacao">
                  <SchoolIcon sx={{ fontSize: 18 }} /> Educação e Certificações
                </a>
              </li>
              <li>
                <a href="#contato">
                  <MailIcon sx={{ fontSize: 18 }} /> Contato
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.navMobile}>
            <IconButton
              onClick={() => toggleDrawer(true)}
              sx={{ color: "#fff" }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={open}
              onClose={() => toggleDrawer(false)}
              className={styles.drawer}
              sx={{
                "& .MuiDrawer-paper": {
                  backgroundColor: "#1B325F", // sua cor desejada
                  border: '1px solid #3A89C9',
                  boxShadow: '0 0 8px #3A89C940'
                },
              }}
            >
              <List>
                <ListItem component="a" href="#about" sx={{ marginTop: 3 }} onClick={()=> setOpen(false)}>
                  <PersonIcon
                    sx={{ fontSize: 26, color: " #F26C4F", marginRight: 2 }}
                  />
                  <span className={styles.span}>Sobre mim</span>
                </ListItem>
                <ListItem component="a" href="#skills" sx={{ marginTop: 2 }} onClick={()=> setOpen(false)}>
                  <BuildIcon
                    sx={{ fontSize: 26, color: " #F26C4F", marginRight: 2 }}
                  />
                  <span className={styles.span}>Skills</span>
                </ListItem>
                <ListItem component="a" href="#projetos" sx={{ marginTop: 2 }} onClick={()=> setOpen(false)}>
                  <FolderOpenIcon
                    sx={{ fontSize: 26, color: " #F26C4F", marginRight: 2 }}
                  />
                  <span className={styles.span}>Projetos</span>
                </ListItem>
                <ListItem component="a" href="#educacao" sx={{ marginTop: 2 }} onClick={()=> setOpen(false)}>
                  <SchoolIcon
                    sx={{ fontSize: 26, color: " #F26C4F", marginRight: 2 }}
                  />
                  <span className={styles.span}>Educação e Certificações</span>
                </ListItem>
                <ListItem component="a" href="#contato" sx={{ marginTop: 2 }} onClick={()=> setOpen(false)}>
                  <MailIcon
                    sx={{ fontSize: 26, color: " #F26C4F", marginRight: 2 }}
                  />
                  <span className={styles.span}>Contato</span>
                </ListItem>
              </List>
            </Drawer>
          </div>
        </nav>
      </section>
    </header>
  );
}
