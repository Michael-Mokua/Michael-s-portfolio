import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Michael Mokua | Full Stack Developer'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #000000, #111111)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    color: 'white',
                    border: '20px solid #22d3ee', // Cyan border
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', color: '#22d3ee', fontSize: 40, marginBottom: 20 }}>
                    {/* Simple geometric logo shape */}
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 20 }}>
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                    </svg>
                    Portfolio
                </div>
                <div style={{ fontSize: 130, fontWeight: 'bold', letterSpacing: '-0.05em' }}>Michael Mokua</div>
                <div style={{ fontSize: 40, opacity: 0.6, marginTop: 10 }}>Full Stack Developer • Next.js • Python</div>
            </div>
        ),
        {
            ...size,
        }
    )
}
