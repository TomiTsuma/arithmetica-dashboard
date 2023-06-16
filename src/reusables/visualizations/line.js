export default function CustomTooltip({ active, payload, label })
{
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p>{`Month:`}</p>
          <p>{`Value:`}</p>
        </div>
      );
    }
  
    return null;
  };