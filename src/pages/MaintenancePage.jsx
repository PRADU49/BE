import { getMaintenanceConfig } from "../config/maintenanceConfig";

function MaintenancePage() {
  const config = getMaintenanceConfig();

  return (
    <div className="maintenance-page">
      <div className="maintenance-container">
        {/* Animated maintenance icon - Exclamation mark */}
        <div className="maintenance-icon-wrapper">
          <div className="exclamation-icon">!</div>
        </div>

        {/* Title */}
        <h1 className="maintenance-title">{config.title}</h1>

        {/* Message */}
        <p className="maintenance-message">{config.message}</p>

        {/* Estimated time */}
        {config.showEstimatedTime && config.estimatedTime && (
          <div className="maintenance-estimated-time">
            <p>
              <span className="label">Estimated Time:</span>
              <span className="value">{config.estimatedTime}</span>
            </p>
          </div>
        )}

        {/* Progress indicator */}
        <div className="maintenance-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <p className="progress-text">We're working hard to improve your experience</p>
        </div>

        {/* Support section */}
        <div className="maintenance-support">
          {config.showSupportContact && config.supportEmail && (
            <div className="support-contact">
              <h3>Need Assistance?</h3>
              <p>
                For urgent inquiries, please email us at{" "}
                <a href={`mailto:${config.supportEmail}`} className="support-email">
                  {config.supportEmail}
                </a>
              </p>
            </div>
          )}

          {config.showSocialLinks && config.socialLinks && (
            <div className="social-links">
              <p>Follow us for updates:</p>
              <div className="social-icons">
                {config.socialLinks.facebook && (
                  <a
                    href={config.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                    className="social-icon facebook"
                  >
                    <span>f</span>
                  </a>
                )}
                {config.socialLinks.instagram && (
                  <a
                    href={config.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    className="social-icon instagram"
                  >
                    <span>📷</span>
                  </a>
                )}
                {config.socialLinks.whatsapp && (
                  <a
                    href={config.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp"
                    className="social-icon whatsapp"
                  >
                    <span>💬</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer message */}
        <p className="maintenance-footer">Thank you for your patience and understanding.</p>
      </div>

      {/* Background effects */}
      <div className="aurora aurora-left" />
      <div className="aurora aurora-right" />
      <div className="background-noise" />
    </div>
  );
}

export default MaintenancePage;
