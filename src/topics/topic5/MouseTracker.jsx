
function MouseTracker() {
    const [mousePosition, setMousePosition] = useState({ x:0, y:0});

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({x: event.clientX, y: event.clientY});
        };
        window.addEventListener('mousemove',handleMouseMove);

        return () => {
          window.removeEventListener('mousemove', handleMouseMove);

        }

    }, []);

    return (
      <div>
        <h2>Mouse Position</h2>
        <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
      </div>
    );
}

export default MouseTracker;