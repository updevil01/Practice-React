// src/components/Stats.js
const Stats = ({ items }) => {
    const numItems = items.length;
    const checked = items.filter((item) => item.packed).length;
    const percentage = Math.round((checked / numItems) * 100) || 0;
  
    if (!items.length) return <div className='footer'>No task</div>;
  
    return (
      <footer className='stats'>
        {percentage === 100
          ? 'ทำทุกอย่างเสร็จหมดแล้ว'
          : <em>คุณมี {numItems} รายการที่ทำเสร็จแล้ว {checked} คิดเป็น {percentage}%</em>}
      </footer>
    );
  };
  
  export default Stats;
  