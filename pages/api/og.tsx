import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default function handler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Marco Calderon - Portfolio';

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#171717',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            flexWrap: 'nowrap',
            gap: '32px',
            padding: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 2,
            }}
          >
            <div
              style={{
                fontSize: 72,
                color: 'white',
                fontWeight: '800',
                marginBottom: '32px',
              }}
            >
              Marco Calderon
            </div>
            <div
              style={{
                fontSize: 48,
                color: 'white',
                fontWeight: 'bold',
                marginBottom: '24px',
              }}
            >
              Full Stack Web Developer
            </div>
            <div
              style={{
                fontSize: 32,
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Taking ideas to reality.
            </div>
            <div
              style={{
                fontSize: 32,
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Building your next successful project.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              flex: 1,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="256"
              height="256"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M9 16V8l3 5l3-5v8" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9s-9-1.8-9-9s1.8-9 9-9z" />
              </g>
            </svg>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
