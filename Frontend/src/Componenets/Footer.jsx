import React from 'react'

const Footer = () => {
  return (
    <div>
  <footer style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center' }}>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <p style={{
        color: '#FF5722',
        fontSize: '20px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        margin: '0',
        cursor: 'pointer',
        transition: 'color 0.3s ease'
      }} 
      onMouseEnter={(e) => e.target.style.color = '#646cff'} 
      onMouseLeave={(e) => e.target.style.color = 'white'}
      >
        Contact Us
      </p>
    </div>
    <p style={{ color: "white", fontStyle: 'italic' }}>
      "Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers."
    </p>
    <p style={{ color: 'white', marginBottom: '0' }}>
      Copyright &copy; {new Date().getFullYear()} By Team JPYY ❤
    </p>
  </footer>
</div>


  )
}

export default Footer
