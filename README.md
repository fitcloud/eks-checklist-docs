<h1 align="center" style="border-bottom: none">
     <a href="https://fitcloud.github.io/eks-checklist-docs" target="_blank"> <img alt="EKS-Checklist" src="/docs/images/EKS_Checklist.png" width="400"> </a><br>EKS-Checklist
</h1>
 
<p align="center"> <strong>EKS-Checklist</strong> 문서 레포지토리입니다.<br> 자세한 가이드는 <a href="https://github.com/fitcloud/eks-checklist" target="_blank">공식 GitHub 페이지</a>에서 확인하세요. </p>

소개
본 레포지토리는 솔트웨어(Saltware)에서 제공하는 EKS-Checklist 가이드 문서를 포함하고 있습니다.
EKS 운영 시 필수적으로 점검해야 할 항목들을 정리한 가이드북이며, 내부 운영 정책 수립 및 진단 보고서 작성 시 활용할 수 있습니다.

✅ 이 저장소에는 문서(guides)만 포함되어 있으며,
실제 서비스용 CLI 도구 및 Dockerfile 등 실행 환경은 **비공개(private)**로 관리됩니다.
상용 버전 사용을 원하실 경우 별도 문의 바랍니다.

<div align="center"
   
[![GitHub Release][release-img]][release]
[![Downloads][download-img]][release]
[![Language][go-img]][go-link]
[![Cloud Platform][aws-img]][aws-link]
[![Best Practice][eks-best-img]][eks-best-link]
[![Best Practice][k8s-best-img]][k8s-best-link]
[![Runbook][runbook-img]][runbook-link]
[![Service][eks-img]][eks-link]

<!-- Badge Definitions -->
[release-img]: https://img.shields.io/github/v/release/fitcloud/eks-checklist?logo=github
[download-img]: https://img.shields.io/github/downloads/fitcloud/eks-checklist/total.svg
[go-img]: https://img.shields.io/badge/Language-Go-blue?logo=go
[aws-img]: https://img.shields.io/badge/Cloud_Platform-AWS-FF9900?logo=amazon-aws&logoColor=white
[eks-img]: https://img.shields.io/badge/Service-Elastic%20Kubernetes%20Service-FF9900?logo=amazon-eks&logoColor=white
[eks-best-img]: https://img.shields.io/badge/AWS_EKS-Best_Practice-FF9900?logo=amazon-eks&logoColor=white
[k8s-best-img]: https://img.shields.io/badge/Kubernetes-Best_Practice-326CE5?logo=kubernetes&logoColor=white
[runbook-img]: https://img.shields.io/badge/Runbook-Guide-2f7b6f?logo=read-the-docs&logoColor=white

<!-- Links -->
[release]: https://github.com/fitcloud/eks-checklist/releases
[go-link]: https://go.dev/
[aws-link]: https://aws.amazon.com/
[eks-link]: https://aws.amazon.com/eks/
[eks-best-link]: https://docs.aws.amazon.com/ko_kr/eks/latest/best-practices
[k8s-best-link]: https://kubernetes.io/docs/setup/best-practices/
[runbook-link]: https://fitcloud.github.io/eks-checklist-docs/

</div>

# EKS Checklist
### EKS Checklist는 Amazon EKS (Elastic Kubernetes Service) 클러스터의 정보를 확인하여 EKS 권장 모범 사례 및 Kubernetes의 권장 모범 사례를 준수하고 있는지 점검하고, 클러스터 운영을 최적화하는 데 필요한 조치 사항을 제공합니다.

* **쉬운 셀프 점검** EKS Cluster가 AWS EKS 모법사례 및 Kubernetes 모범사례에 준수 하고 잇는지 쉽게 확인이 가능합니다.
* **보고서 제공** 사용자는 원하는 양식 html, text, pdf 형식으로 선택하여 제공받을 수 있으며 한눈에 문제점 식별 할 수 있습니다.
* **가이드 제공** EKS Cluster의 문제점에 대한 각각의 항목에 대하여 어떻게 조치해야하는지에 대한 Runbook을 제공받아 문제점을 개선 할 수 있습니다.
* **다양한 환경 지원** Window, Linux, Mac OS와 Container image을 통한 Dokcer, Kubernetes Cluster 등 다양한 방법을 제공합니다.

예) CMD Terminal(Window)

<img src="docs/images/output.png" width="750" alt="output">

## 점검 항목
- **비용 최적화 (Cost)**: EKS 클러스터의 리소스 사용을 점검하여 불필요한 비용을 줄일 수 있는 방법을 제공합니다.
- **일반 설정 (General)**: 클러스터의 기본 설정과 환경이 적절하게 구성되었는지 확인합니다.
- **네트워크 (Network)**: VPC, 서브넷, 보안 그룹 등 네트워크 구성을 점검하여 네트워크가 올바르게 설정되었는지 확인합니다.
- **확장성 (Scalability)**: 클러스터가 필요에 따라 확장 가능하도록 설정되었는지 점검합니다.
- **보안 (Security)**: IAM 정책, 인증 및 권한 설정 등 보안 설정을 점검하여 클러스터가 안전하게 운영되고 있는지 확인합니다.
- **안정성 (Reliability)**: 클러스터의 안정성을 위한 백업, 모니터링 및 로깅 설정이 제대로 되어 있는지 점검합니다.

## 필수 조건
EKS-Checklist를 사용하기 전에 다음 항목들이 설치되고 올바르게 설정되어 있어야 합니다.
1. **AWS CLI**: AWS CLI가 설치되어 있고 적절한 권한으로 설정되어 있어야 합니다. 설치 및 설정 방법은 [여기](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)를 참고하세요.
2. **AWS EKS 클러스터 접근 권한**: EKS-Checklist는 AWS EKS 클러스터에 접근할 수 있는 권한을 필요로 합니다.

## 설치 방법
EKS-Checklist는 GitHub의 릴리즈 페이지에서 원하는 버전을 다운로드하여 사용할 수 있습니다.
### GitHub Releases에서 다운로드
1. [GitHub Releases](https://github.com/fitcloud/eks-checklist/releases) 페이지로 이동합니다.
2. 운영 체제에 맞는 바이너리를 다운로드합니다.

## 사용법
### 실행 방법
```bash
{바이너리 파일명} {--flags}
예: eks-checklist --help
```
- `--context` : 사용할 kubeconfig 컨텍스트 이름
- `--kubeconfig` : 사용할 kubeconfig 파일 경로 (기본값: `"C:\\Users\\사용자이름\\.kube\\config"`)
- `--filter` : 출력 결과 필터링 옵션 (`all`, `pass`, `fail`, `manual`)
- `--output` : 출력 형식 지정 (`text`, `html`) — 기본값: `text`
- `--profile` : 사용할 AWS CLI 프로파일 이름
- `--sort` : 결과를 상태별(PASS / FAIL / MANUAL)로 정렬
- `-h`, `--help` : 도움말 출력
### macOS (Darwin)
1. [Releases 페이지](https://github.com/fitcloud/eks-checklist/releases)에서 macOS용 바이너리를 다운로드
   예: `eks-checklist-darwin-amd64`
2. 실행 권한 부여 및 설치:
```bash
chmod +x eks-checklist-darwin-amd64
sudo mv eks-checklist-darwin-amd64 /usr/local/bin/eks-checklist
```
3. 실행 예시:
```bash
eks-checklist
```
### Linux
1. [Releases 페이지](https://github.com/fitcloud/eks-checklist/releases)에서 Linux용 바이너리 다운로드
   예: `eks-checklist-linux-amd64`
2. 실행 권한 부여 및 설치:
```bash
chmod +x eks-checklist-linux-amd64
sudo mv eks-checklist-linux-amd64 /usr/local/bin/eks-checklist
```
3. 실행 예시:
```bash
eks-checklist
```
### Windows
1. [Releases 페이지](https://github.com/fitcloud/eks-checklist/releases)에서 `.exe` 파일 다운로드
   예: `eks-checklist-windows-amd64.exe`
2. 적절한 폴더에 저장 (예: `C:\\Program Files\\EKS-Checklist\\`)
3. 명령 프롬프트 또는 PowerShell에서 실행:
```bash
eks-checklist.exe
```
### Docker
**다음 세 디렉토리를 마운트하여 사용합니다**:
- `~/.kube`  : kubeconfig file 디렉터리  
- `~/.aws`   : AWS credentials 디렉터리  
- `./output` : 옵션에 따른 레포트 결과물이 저장되는 디텍토리  

1. EKS-Checklist Public Image로 docker 실행:
```bash
docker run -v ~/.kube:/root/.kube -v ~/.aws:/root/.aws -v ./output:/output public.ecr.aws/x5b3c7k0/eks-checklist:latest
```
실행 시 결과물이 바로 나타나며 종료됩니다 --detach 옵션 사용 시 docker logs 명령어를 사용해 결과물을 확인 할 수 있습니다.

### EKS Pod
**조건**: EC2, VPC, EKS 등 AWS 리소스를 조회하기 때문에 IAM Role 권한이 필요합니다.
여기서는 **eksctl을 활용해 IRSA(ServiceAccount)로 Pod에 IAM Role을 주입**하여 사용합니다.

**예) eksctl**: 기본 namespace(default)에 "eks-checklist-sa" 이름의 ServiceAccount를 만들고 권한을 부여합니다

1. IAM Policy 생성:
```bash
curl -sSL https://raw.githubusercontent.com/fitcloud/eks-checklist/refs/heads/main/policy/minimum-policy.json -o minimum-policy.json
POLICY_ARN=$(aws iam create-policy --policy-name eks-checklist-access --policy-document file://minimum-policy.json --query 'Policy.Arn' --output text)
echo $POLICY_ARN
```
2. IAM ServiceAccount 생성 (IRSA):
   --cluster의 값을 자신의 클러스터 명으로 수정합니다 
```bash
eksctl create iamserviceaccount \
   --name eks-checklist-sa \
   --namespace default \
   --cluster eks-checklist \
   --attach-policy-arn $POLICY_ARN \
   --approve \
   --override-existing-serviceaccounts
```
3. HTML 보고서 추출 Job 배포:
```bash
kubectl apply -f https://raw.githubusercontent.com/fitcloud/eks-checklist/refs/heads/main/manifest/output-html-job.yaml
```
4. 결과물 가져오기:
   - Job Pod는 보고서를 Copy할 수 있도록 5분동안 정지되어 있습니다
```bash
POD_NAME=$(kubectl get pod -l job-name=eks-checklist-job -o jsonpath="{.items[0].metadata.name}")
kubectl cp $POD_NAME:/output ./output
```
5. 정리 (리소스 삭제):
```bash
eksctl delete iamserviceaccount --cluster eks-checklist --name eks-checklist-sa
kubectl delete -f https://raw.githubusercontent.com/fitcloud/eks-checklist/refs/heads/main/manifest/output-html-job.yaml
```
