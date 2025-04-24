import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export const dynamic = 'force-dynamic';

export function GET(request: NextRequest) {
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
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.46227 6.31267H12.1281L17.4011 19.1629H17.667L22.94 6.31267H30.6059V29H24.5796V15.8839H24.4023L19.3508 28.8228H15.7173L10.6658 15.7953H10.4886V29H4.46227V6.31267Z"
                fill="white"
              />
              <foreignObject
                x="23.3839"
                y="21.015"
                width="14.4322"
                height="14.6216"
              >
                <div
                  style={{
                    backdropFilter: 'blur(1.39px)',
                    clipPath: 'url(#bgblur_0_6479_2_clip_path)',
                    height: '100%',
                    width: '100%',
                  }}
                ></div>
              </foreignObject>
              <g
                filter="url(#filter0_d_6479_2)"
                data-figma-bg-blur-radius="2.7729"
              >
                <circle
                  cx="30.6"
                  cy="28.188"
                  r="4.40005"
                  fill="url(#paint0_linear_6479_2)"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_6479_2"
                  x="23.3839"
                  y="21.015"
                  width="14.4322"
                  height="14.6216"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="0.232598" />
                  <feGaussianBlur stdDeviation="1.40802" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.424575 0 0 0 0 0.27451 0 0 0 0 0.917647 0 0 0 0.5 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_6479_2"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_6479_2"
                    result="shape"
                  />
                </filter>
                <clipPath
                  id="bgblur_0_6479_2_clip_path"
                  transform="translate(-23.3839 -21.015)"
                >
                  <circle cx="30.6" cy="28.188" r="4.40005" />
                </clipPath>
                <linearGradient
                  id="paint0_linear_6479_2"
                  x1="32.8898"
                  y1="26.5267"
                  x2="27.9959"
                  y2="31.6452"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2C80FF" />
                  <stop offset="1" stop-color="#6C46EA" stop-opacity="0.5" />
                </linearGradient>
              </defs>
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
