import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; 2024 Word Vault . All Rights Reserved By Poorana Selvan.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1f3aff',
    padding: '10px 20px',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: 0,
    borderTop: '1px solid #e7e7e7',
  },
  text: {
    margin: 0,
    color: '#fff',
    fontSize: '14px',
  },
};

export default Footer;
