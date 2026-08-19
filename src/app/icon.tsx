import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 7,
          background: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 50%, #34d399 100%)',
          color: '#ffffff',
          fontFamily: 'monospace',
          fontWeight: 700,
          fontSize: 16,
        }}
      >
        {'</>'}
      </div>
    ),
    { ...size }
  );
}
