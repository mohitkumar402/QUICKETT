import { useLocation, useNavigate } from 'react-router-dom';

export default function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || {};

  // Remove password from display for security
  const displayData = { ...data };
  delete displayData.password;

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto" }}>
      <h2>{data.formType === 'signup' ? 'Registration' : 'Login'} Successful!</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          {Object.entries(displayData).map(([key, value]) => (
            key !== 'formType' && value && (
              <tr key={key}>
                <th style={{ textAlign: "left", padding: "6px", borderBottom: "1px solid #eee" }}>
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </th>
                <td style={{ padding: "6px", borderBottom: "1px solid #eee" }}>{value}</td>
              </tr>
            )
          ))}
        </tbody>
      </table>
      <button style={{ marginTop: "1rem" }} onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}
