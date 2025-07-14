const { PutObjectCommand,GetObjectCommand, S3Client } = require('@aws-sdk/client-s3');

const { getSignedUrl  } = require("@aws-sdk/s3-request-presigner");
const Bucket = process.env.AMPLIFY_BUCKET;
// S3 클라이언트 설정
const s3 = new S3Client({
  region: 'ap-northeast-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// POST 함수 
async function POST(req, res) {
  try {
    // 폼 데이터 처리
    const formData = await req.formData();
    const files = formData.getAll('img');
    
	// 업로드할 이미지 파일 수 제한
    if (files.length > 3) {
      return new Response(
        JSON.stringify({
          message: '업로드할 수 있는 이미지 파일의 수는 최대 3장입니다.',
        }),
        { status: 400 },
      );
    }

    // 이미지 파일을 S3에 업로드
    const uploadPromises = files.map(async (file) => {
      const Body = Buffer.from(await file.arrayBuffer());
      const Key = file.name;
      const ContentType = file.type || 'image/jpg';

      await s3.send(
        new PutObjectCommand({
          Bucket,
          Key,
          Body,
          ContentType,
        }),
      );

      return [
        `https://${Bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${Key}`,
      ];
    });

    const imgUrls = await Promise.all(uploadPromises);

    // 파일의 개수가 1이면 배열 대신 단일 URL 반환
    if (imgUrls.length === 1) {
      return new Response(JSON.stringify({ data: imgUrls[0], message: 'OK' }), {
        status: 200,
      });
    }

    // 파일 개수가 여러개면 URL 배열 반환
    return new Response(JSON.stringify({ data: [...imgUrls], message: 'OK' }), {
      status: 200,
    });
    
  } catch (error) {
    console.error('Error uploading files:', error);
    return new Response(
      JSON.stringify({ message: '파일 업로드 중 오류가 발생했습니다.' }),
      { status: 500 },
    );
  }
}
const getUploadSigendURLImg = async(key, type) => {
    try{
        const bucketParams = {
            Bucket: `ai-o-siranai`,
            Key:key,
            ContentType: type,
        };
        const command = new PutObjectCommand(bucketParams);
        const s3Client = new S3Client({ region: 'ap-northeast-2' });
        const signedUrl = await getSignedUrl(s3Client, command, {
          expiresIn: 3600,
        });
        return signedUrl;
    }
    catch(e){
        console.log(e)
    }
}
const getSignedURLImg = async (key) => {
	try {
	  const bucketParams = {
		Bucket: 'ai-o-siranai',
		Key: key,
	  };
	  const command = new GetObjectCommand(bucketParams);
	  const s3Client = new S3Client({ region: 'ap-northeast-2' });
	  const signedUrl = await getSignedUrl(s3Client, command, {
		expiresIn: 3600,
	  });
	  return signedUrl;
	} catch (e) {
	  console.error('GET signed URL 생성 실패:', e);
	}
  };

async function getAudioUploadUrl(key, contentType = 'audio/mpeg') {
	const s3Client = new S3Client({ region: 'ap-northeast-2' });
	const command = new PutObjectCommand({
		Bucket: 'ai-o-siranai-audio',
		Key: key,
		ContentType: contentType,
	});

	const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 600 });
	return signedUrl;
}
async function getSignedUrlAudio(key) {
	const s3Client = new S3Client({
		region: 'ap-northeast-2',
		credentials: {
		  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
		},
	  });
	const command = new GetObjectCommand({
		Bucket: 'ai-o-siranai-audio',
		Key: key,
	});
	
	const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // 1시간
	return signedUrl;
}
async function downloadMp3FromS3(key) {
	// const s3Client = new S3Client({ region: 'ap-northeast-2' });
	const s3Client = new S3Client({
		region: 'ap-northeast-2',
		credentials: {
		  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
		},
	  });
	const command = new GetObjectCommand({
	  Bucket: 'ai-o-siranai-audio',
	  Key: key,
	});
  
	const { Body } = await s3Client.send(command);
	const chunks = [];
	for await (const chunk of Body) {
	  chunks.push(chunk);
	}
	const fileContent = Buffer.concat(chunks); // <Buffer ...>
	return fileContent;
  }
// const test = async() => {
// 	// const img = await getSignedURLImg('ai-nai-example1.png')
// 	const audio = await getAudioPlaybackUrl('screamvillain.mp3')
// 	console.log(audio)
// 	// console.log(img)
// }
// test()
module.exports = {
	getSignedURLImg, getSignedUrlAudio
}