function OfficeMap() {
  const mapLink = "https://maps.app.goo.gl/qCkL4PSTyu8VQGiy7";

  return (
    <div style={{ width: "100%", maxWidth: "800px" }}>
      <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block" }}
      >
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.950426415942!2d-113.99171382349164!3d51.07246517171767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371648302d41991%3A0xa6c2d4bf7361258b!2sGlobal%20Tax%20Solutions%20Inc.!5e0!3m2!1sen!2sin!4v1767698646942!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          style={{
            border: 0,
            pointerEvents: "none", // 🔑 REQUIRED
          }}
        />
      </a>

      <p style={{ textAlign: "center", marginTop: "8px" }}>
        📍 Click the map to open in Google Maps
      </p>
    </div>
  );
}

export default OfficeMap;
