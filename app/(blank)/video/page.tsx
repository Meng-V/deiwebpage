export default function Page() {
  return (
    <div className="videoCenter">
      <video width="auto" height="100%" autoPlay loop muted>
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
